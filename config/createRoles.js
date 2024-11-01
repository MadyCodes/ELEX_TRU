const connectDB = require('./db'); // Adjust the path as necessary
const Role = require('../models/Role'); // Assuming you have a Role model

const createRoles = async () => {
  await connectDB();

  try {
    // Example roles to create
    const roles = ['user', 'admin', 'moderator'];

    for (const role of roles) {
      const existingRole = await Role.findOne({ name: role });
      if (!existingRole) {
        await Role.create({ name: role });
        console.log(`Role ${role} created!`);
      } else {
        console.log(`Role ${role} already exists!`);
      }
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    process.exit(); // Exit the script after completion
  }
};

createRoles();
