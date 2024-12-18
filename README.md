# Gen-X Prototype

**Gen-X Prototype** is a futuristic, AI-integrated project designed to leverage cutting-edge voice command technology to streamline interactions with web-based content. The project is built with a React frontend and a FastAPI backend, providing seamless functionality for viewing, searching, and downloading content. Styled with a high-tech theme, the application prioritizes accessibility, responsiveness, and user experience.

---

## **Features**

### **Completed Features** ✅

1. **Voice Command Functionality**:
   - Users can interact with the application using voice commands via **Annyang**.
   - Supported commands:
     - "View content"
     - "Search documents"
     - "Download file"

2. **Dynamic Content Rendering**:
   - **View Panel**: Displays fetched data dynamically.
   - **Search Panel**: Shows search results based on user input.
   - **Download Panel**: Provides confirmation and file download links.

3. **High-Tech Themed UI**:
   - Styled with "tech-green" aesthetics:
     - Neon green highlights.
     - Futuristic fonts and layouts.
   - Responsive design using **React-Bootstrap**.

4. **Error Handling**:
   - Handles API call errors gracefully using `try/catch`.

5. **Manual Trigger Support**:
   - Buttons to manually initiate the "View," "Search," and "Download" actions in addition to voice commands.

6. **API Integration**:
   - Uses **Axios** for making GET requests to fetch data and search results.
   - Downloads files by dynamically creating anchor elements.

7. **Cross-Browser Support**:
   - Relies on the **Web Speech API** for voice recognition, compatible with modern browsers like Chrome.

---

### **Pending Features** ⬜

1. **Customizable Voice Commands**:
   - Allow users to configure their own voice commands and map them to actions.

2. **Multi-Language Support**:
   - Use the `annyang.setLanguage()` feature to support multiple languages (e.g., French, Spanish, Arabic).
   - Add a dropdown or settings panel for users to select a language.

3. **Advanced Search Functionality**:
   - Integrate a real search engine API (e.g., Google Custom Search API or Elasticsearch).
   - Provide filters (e.g., by date, category) in the search results.

4. **File Management for Downloads**:
   - Enable file uploads and downloads with metadata.
   - Add a progress bar for large file downloads.

5. **Authentication and User Profiles**:
   - Add user authentication (e.g., via Firebase or Auth0).
   - Allow users to save their preferences (e.g., favorite commands, language).

6. **Database Integration**:
   - Store user data, search history, or downloaded files using a database like Firebase, MongoDB, or PostgreSQL.

7. **Enhanced Accessibility**:
   - Add screen reader support for visually impaired users.
   - Include adjustable font sizes and high-contrast modes.

8. **Speech Feedback**:
   - Use a text-to-speech library (e.g., `speechSynthesis`) to provide audible feedback after executing commands.

9. **Offline Support**:
   - Use Service Workers to cache some data and provide limited functionality offline.

10. **Detailed Logs and Analytics**:
    - Track user interactions (e.g., voice commands used, frequent actions) for improving UX.
    - Display a dashboard for admin users to view usage analytics.

11. **Theme Customization**:
    - Allow users to switch between multiple high-tech themes (e.g., cyberpunk, dark mode).

12. **FastAPI Backend Integration**:
    - Use **FastAPI** to handle backend functionalities such as:
      - API endpoints for content fetching, searching, and downloading.
      - Authentication and user management.
      - Database connectivity for storing user data, search history, and metadata.
    - Leverage FastAPI's asynchronous capabilities for optimal performance.

---

## **Getting Started**

### **Prerequisites**
- Node.js and npm installed.
- Modern web browser (e.g., Google Chrome).
- Internet connection for voice recognition functionality.
- Python 3.9+ installed for FastAPI backend.

### **Installation**
Clone the repository:
   ```bash
   git clone https://github.com/Hamza1610/Gen-X-prototype.git
   ```
#### **Frontend Setup**

1. Navigate to the project directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

#### **Backend Setup**
1. Navigate to the backend project directory:
   ```bash
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

4. Access the backend API documentation:
   ```
   http://localhost:3002/docs
   ```

---

## **How to Contribute**

We welcome contributions from developers around the globe! Here’s how you can get started:

1. **Fork the Repository**:
   - Click the "Fork" button on the top right of the GitHub page.

2. **Create a Feature Branch**:
   - Use a meaningful name for your branch, e.g., `add-multi-language-support`.
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes and Test**:
   - Implement the feature or fix.
   - Test it thoroughly.

4. **Commit Your Changes**:
   - Use clear and concise commit messages.
   ```bash
   git commit -m "Add multi-language support"
   ```

5. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Submit a Pull Request**:
   - Go to the original repository on GitHub and click on "New Pull Request".

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any questions or suggestions, feel free to reach out:
- **Project Maintainer**: Hamza1610
- **GitHub Repository**: [Gen-X Prototype](https://github.com/Hamza1610/Gen-X-prototype)

