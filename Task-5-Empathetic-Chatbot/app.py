%%writefile app.py
import streamlit as st
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
import os

# Set up the page
st.set_page_config(page_title="MindfulAI - Empathetic Support", page_icon="🌿")
st.title("🌿 MindfulAI Support")
st.markdown("A fine-tuned assistant for stress and emotional wellness.")

# Load model and tokenizer
@st.cache_resource
def load_model():
    model_path = "/content/empathetic-distilgpt2-final"
    if not os.path.exists(model_path):
        return None, None

    tokenizer = AutoTokenizer.from_pretrained(model_path)
    model = AutoModelForCausalLM.from_pretrained(model_path).to("cuda" if torch.cuda.is_available() else "cpu")
    return tokenizer, model

tokenizer, model = load_model()

# Initialize session state for chat
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display chat history
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# User Input
if prompt := st.chat_input("How are you feeling today?"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    with st.chat_message("assistant"):
        if model is not None:
            # 1. Clean Input
            priming_text = "I am so sorry to hear you're feeling that way, "
            input_text = f"User: {prompt}\nAssistant: {priming_text}"

            inputs = tokenizer(input_text, return_tensors="pt").to(model.device)

            # 2. Stable Generation Settings
            output_tokens = model.generate(
                **inputs,
                min_new_tokens=25,       
                max_new_tokens=70,       
                do_sample=True,
                temperature=0.6,         
                top_k=40,                
                top_p=0.9,               
                no_repeat_ngram_size=3,  
                pad_token_id=tokenizer.eos_token_id
            )

            # 3. Cleanup & The "Hallucination Guard"
            full_response = tokenizer.decode(output_tokens[0], skip_special_tokens=True)

            # Split to get the Assistant's reply
            if "Assistant:" in full_response:
                response = full_response.split("Assistant:")[-1].strip().lstrip(',. ')
            else:
                response = full_response.split(prompt)[-1].strip().lstrip(',. ')

            # Fix dataset artifacts
            response = response.replace("_comma_", ",").replace("_", " ")

            # GUARDRULE: If the model hallucinates about kids/children, we fix it
            if any(word in response.lower() for word in ["kids", "children", "child"]):
                # Take the first sentence if it exists, otherwise use a default
                sentences = response.split(".")
                if len(sentences) > 0:
                    response = sentences[0] + ". I know it is hard, but I am here to listen if you want to talk more about it."
                else:
                    response = "I hope you can find a way to be kind to yourself today."

            # 4. Show the response
            st.markdown(response)
            st.session_state.messages.append({"role": "assistant", "content": response})
        else:
            st.error("Model failed to load. Please check your file path.")
