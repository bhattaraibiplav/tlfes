import Teacher from "../Schema/teacherSchema.ts";
import connectDB from "./connect.ts";
import bcrypt from "bcryptjs";

export async function seed() {
  await connectDB();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);
    await Teacher.create({
  "firstName": "John",
  "lastName": "Doe",
  "gender": "male",
  "DOB": "1985-06-15T00:00:00.000Z",
  "email": "john.doe@example.com",
  "subjects": [
    "65ae2c1bf4b4c0490f024a21",
    "65ae2c23f4b4c0490f024a22"
  ],
  "experience": 8,
  "profileImage": "https://example.com/images/john-doe.png",
  "isActive": true,
  "employmentDate": "2020-01-10T00:00:00.000Z",
  "phoneNumber": "+15551234567",
  "payments": [
    "65ae2c5cf4b4c0490f024a25",
    "65ae2c65f4b4c0490f024a26"
  ],
  "education": [
    {
      "degree": "B.Ed",
      "institution": "University of Education",
      "yearOfCompletion": 2008
    },
    {
      "degree": "M.Ed",
      "institution": "Oxford University",
      "yearOfCompletion": 2010
    }
  ],
  "skills": [
    "communication",
    "curriculum planning",
    "classroom management"
  ],
  "hashedPassword": hashedPassword,
  "role": "teacher",
  "attendanceRecords": [
    "65ae2d05f4b4c0490f024a30",
    "65ae2d0df4b4c0490f024a31"
  ]
});
  console.log("✅ Database seeded!");
  } catch (error: any) {
    console.error("❌ Error seeding database:", error);
    // process.exit(1);
  }

  
}

