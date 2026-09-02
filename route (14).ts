import { NextResponse } from "next/server";
import { seedDatabase } from "@/db/seed";

export async function POST() {
  try {
    await seedDatabase();
    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
    });
  } catch (error) {
    console.error("Error seeding database:", error);
    return NextResponse.json(
      { success: false, error: "Failed to seed database" },
      { status: 500 }
    );
  }
}
