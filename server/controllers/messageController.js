import model from '../models/messageModels.js';

export const message = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation: Check if all required fields are present
        if (!name || !email || !subject || !message) {
            return res.status(400).send({
                success: false,
                message: "All fields are required"
            });
        }

        // Save the message to the database
        await model.create({ name, email, subject, message });

        // Send success response
        res.status(200).send({
            success: true,
            message: "Message sent successfully"
        });

    } catch (error) {

        if (error.name === "ValidationError") {
            let errorMessage = "";
            if (error.errors.name) {
              errorMessage += error.errors.name.message + " ";
            }
            if (error.errors.email) {
              errorMessage += error.errors.email.message + " ";
            }
            if (error.errors.subject) {
              errorMessage += error.errors.subject.message + " ";
            }
            if (error.errors.message) {
              errorMessage += error.errors.message.message + " ";
            }
            return res.status(400).json({
              success: false,
              message: errorMessage,
            });
          }

        // Handle errors
        return res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};
