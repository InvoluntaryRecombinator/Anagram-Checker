# ∞ The (In)voluntary Recombinator

> **[ACCESS THE LIVE TERMINAL HERE](https://involuntaryrecombinator.github.io/Anagram-Checker/)**

A deterministic anagram sequence analyzer built to solve the limitations of Large Language Models (LLMs) in strict character validation.

---

## 🌍 The Concept
This tool was engineered to assist in the development of complex, multi-word anagrams for a sci-fi novel. In the lore of the story, the "Voluntary Recombinator" is a cosmic superstructure capable of disassembling and restructuring matter and information at its most fundamental levels. 

This terminal serves as a thematic, functional tool to disassemble and restructure text.

## 🚀 The Engineering Problem: AI Tokenization
Initially, I attempted to use advanced LLMs to generate and validate 20+ letter anagrams. However, I discovered a critical limitation in how these models process information: **Tokenization**. 

Because LLMs break text down into semantic chunks (tokens) rather than processing them as isolated arrays of characters, they are inherently terrible at strict, 1-to-1 character validation. The models would confidently "hallucinate" perfect anagrams that were actually off by several characters. 

### The Solution
I built this deterministic, client-side tool to handle strict character validation. It outperforms LLMs at this specific task by reliably isolating, counting, and matching individual characters.

## 🛠 Tech Stack & Architecture
This project is built using strictly **Vanilla HTML, CSS, and JavaScript** to ensure maximum performance, zero dependencies, and a lightweight footprint.

* **Frontend:** Semantic HTML5 utilizing native `<details>` tags for accessible, JS-free accordion menus. 
* **Styling:** Pure CSS (Flexbox) with a custom CRT/Terminal aesthetic, including a CSS-only pseudo-element infinity logo.
* **Logic:** Vanilla JavaScript.

### How the Algorithm Works
The script operates on a straightforward but highly effective algorithm to track character frequency:

1. **Sanitization:** Inputs are stripped of whitespace and normalized to lowercase.
2. **Array Conversion:** The "Seed Phrase" is split into an array of isolated character strings.
3. **Iteration & Splicing:** The algorithm iterates through the "Attempt" phrase. For every character, it checks the seed bank. 
    * If a match is found, the character is spliced out.
    * If no match is found, it is pushed to an invalid array.
4. **State Evaluation:** The application evaluates the length of the remaining arrays to determine one of four states: Perfect Match, Incomplete Sequence, Capacity Exceeded, or Critical Mismatch.

## ⚙️ Running Locally
Since this is a client-side application with no build steps or bundlers, running it locally is instantaneous.

1. Clone the repository.
2. Open `index.html` in any modern web browser.
