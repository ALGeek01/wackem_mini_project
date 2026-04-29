# wackem_mini_project

Wackem is an interactive whack-a-mole style game for the CSC projects class. The browser UI is served with **FastAPI** and **Uvicorn**.

## How to run the app

1. **Create and activate a virtual environment** (recommended):

   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

   On Windows (PowerShell):

   ```powershell
   python -m venv .venv
   .venv\Scripts\Activate.ps1
   ```

2. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

3. **Start the server** from the project root (same folder as `main.py`):

   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

   Or:

   ```bash
   python main.py
   ```

4. **Open the game** in a browser: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

Press **Start Game** on the page to play.
