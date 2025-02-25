# Webhook Sound Alert System

This project is a Node.js application that listens for incoming webhook requests and plays a corresponding `.wav` sound file when a webhook is received. It is designed to be a simple and customizable alert system that can be integrated with various services that support webhooks.
![Untitled](https://github.com/user-attachments/assets/25ee0627-559d-4b26-893f-7f85dd188ad8)

## Features
- Listens for webhook requests on multiple endpoints (`/webhook`, `/webhook1`, `/webhook2`, etc.).
- Plays a specific `.wav` file for each webhook endpoint.
- Logs incoming webhook data and playback status.
- Easy to set up and extend.

## Prerequisites
- Node.js installed on your system.
- NPM (Node Package Manager) installed.
- `.wav` sound files placed in the project directory (e.g., `alert.wav`, `alert1.wav`, etc.).

---

## General Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/PhillMckinnon/Play-sound-on-webhook-alert
cd Play-sound-on-webhook-alert
```

### 2. Install Dependencies
Install the required Node.js dependencies:
```bash
npm install
```

### 3. Configure Sound Files
Place your `.wav` sound files in the project directory. Ensure the filenames match the paths specified in the code (e.g., `alert.wav`, `alert1.wav`, etc.).

### 4. Run the Application
Start the application using Node.js:
```bash
node index.js
```
The application will start listening on port `3000`. You can test it by sending a POST request to `http://localhost:3000/webhook` (or any of the other endpoints).

---

## Platform-Specific Setup

### Windows
For instructions on setting up the application as a Windows service, see the [Windows Setup Guide](Windows.md).

### Linux
For instructions on setting up the application to run automatically on boot using `cron`, see the [Linux Setup Guide](Linux.md).

---

## Usage
Once the application is running, you can send POST requests to the following endpoints to trigger sound alerts:
- `/webhook` → Plays `alert.wav`
- `/webhook1` → Plays `alert1.wav`
- `/webhook2` → Plays `alert2.wav`
- `/webhook3` → Plays `alert3.wav`
- `/webhook4` → Plays `alert4.wav`

Example using `curl`:
```bash
curl -X POST http://localhost:3000/webhook -H "Content-Type: application/json" -d '{"message": "Test alert"}'
```

---

## Customization
- Add more webhook endpoints by duplicating the existing route handlers and updating the `.wav` file paths.
- Modify the port number in the `index.js` file if needed.
- Replace the `.wav` files with your own sound files.

---

## Troubleshooting
- Ensure the `.wav` files are in the correct directory and have the correct filenames.
- Check the console logs for any errors related to file paths or playback issues.
- Make sure the application has the necessary permissions to access the sound files.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Links
- [Windows Setup Guide](Windows.md)
- [Linux Setup Guide](Linux.md)

---

Enjoy using the Webhook Sound Alert System! If you have any questions or issues, feel free to open an issue on GitHub.

## **📫Contact**

For any questions or feedback, feel free to reach out to:

    Email: phillipmckinnonwork@proton.me
    GitHub: @PhillMckinnon 
