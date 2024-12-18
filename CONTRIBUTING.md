### **2. CONTRIBUTING.md**

This file provides guidelines for contributors to help them make meaningful contributions. Here's the content:

```markdown
# Contributing to Gen-X Prototype

Thank you for considering contributing to **Gen-X Prototype**! We welcome contributions of all kinds, whether it's bug fixes, new features, or improving the documentation.

---

## **How to Contribute**

### **1. Fork the Repository**
Click the "Fork" button on the top-right of this repository to create your copy.

### **2. Clone Your Fork**
Clone your forked repository to your local machine:
```bash
git clone https://github.com/your-username/Gen-X-prototypeUI.git
```

### **3. Create a Feature Branch**
Before making changes, create a new branch:
```bash
git checkout -b feature/your-feature-name
```
Examples:
- `feature/multi-language-support`
- `fix/api-error-handling`

### **4. Make Changes**
- Follow the coding style used in the project.
- Test your changes thoroughly before committing.

### **5. Commit Your Changes**
Write clear and concise commit messages:
```bash
git commit -m "Add support for multi-language voice commands"
```

### **6. Push Your Changes**
Push your branch to your forked repository:
```bash
git push origin feature/your-feature-name
```

### **7. Submit a Pull Request**
Go to the original repository and click on **"New Pull Request"**. Provide details about the changes and link to any related issues.

---

## **Code of Conduct**
Please ensure your contributions follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## **Development Setup**

### **Frontend**
1. Navigate to the frontend directory
    ```
    cd client
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

### **Backend**
2. Navigate to the frontend directory
    ```
    cd server
    ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the FastAPI server:
   ```bash
   py main.py
   ```
---

## **Branch Naming Conventions**
Follow these naming conventions for branches:
- **feature/** for new features (e.g., `feature/add-theme-customization`)
- **fix/** for bug fixes (e.g., `fix/search-api-error`)
- **docs/** for documentation updates (e.g., `docs/add-installation-instructions`)

---

## **Issues and Bug Reports**
To report a bug or suggest a feature:
1. Open an issue in the repository.
2. Provide as much detail as possible (steps to reproduce, expected behavior, etc.).
3. Include screenshots or logs if applicable.

---

## **Testing Contributions**
Ensure your changes do not break existing functionality:
1. Test voice commands in the browser.
2. Check API calls using tools like Postman.
3. Verify UI responsiveness across devices.

---

## **Need Help?**
If you have any questions, feel free to open an issue or contact the project maintainer directly.

---

We’re excited to see your contributions!
```