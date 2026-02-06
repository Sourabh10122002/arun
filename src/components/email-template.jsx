import * as React from 'react';

export const EmailTemplate = ({
    firstName,
    email,
    message,
}) => (
    <div>
        <h1>New message from {firstName}!</h1>
        <p><strong>Email:</strong> {email}</p>
        <hr />
        <p>{message}</p>
    </div>
);
