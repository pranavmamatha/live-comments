# live-comments
A real-time comment section application using WebSockets in Node.js

## Features

- **Session Management**
    - Admin can create new rooms with:
        - Custom name
        - Start time
        - Open/closed status
        - Cool-down time between messages

- **User Interaction**
    - Users can join existing rooms
    - Users can send real-time messages
    - Users can upvote other messages

- **Dynamic Message Handling**
    - Messages with configurable threshold (default: 3) upvotes move to a highlighted section
    - Messages with configurable threshold (default: 10) upvotes trigger admin alerts for responses

## Implementation

Built using raw WebSockets in Node.js for efficient real-time communication between clients and server.
