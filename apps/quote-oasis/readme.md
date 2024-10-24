# Quote Oasis

A simple web application built with **Flask** that returns a random quote each time the page is visited.

This project showcases how release-it can be used with non-JavaScript apps.

## Prerequisites
- Python 3.12 (ensure `python3` is in your path)

### Setting Up Local Development Environment (Easier Way)
1. Install dependencies if not done yet:
   ```shell
   pnpm install
   ```
   This will create a virtual environment and install dependencies.

2. Start the local development server:
   ```shell
   pnpm run dev
   ```

### Setting Up Local Development Environment (Long Version)
1. Create a virtual environment if it does not exist:
   ```shell
   python3 -m venv ./venv
   ```

2. Activate the virtual environment:
   ```shell
   source ./venv/bin/activate
   ```
   Use the same shell for the following commands.

3. Install the project requirements:
   ```shell
   pip install -r requirements.txt
   ```

4. Start the server:
   ```shell
   python app.py
   ```