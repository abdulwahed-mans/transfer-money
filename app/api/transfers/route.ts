import { NextResponse } from "next/server";
import { transferSchema } from "@/lib/validations/transfer";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = transferSchema.parse(json);

    // In a real implementation, this would interact with your database
    const transfer = {
      id: nanoid(),
      transferCode: nanoid(10).toUpperCase(),
      senderId: nanoid(), // Would normally come from authenticated user
      receiverId: nanoid(),
      ...body,
      status: "pending",
      exchangeRate: 1.0, // Would normally fetch from exchange rate API
      fee: calculateFee(body.amount),
      createdAt: new Date(),
    };

    return NextResponse.json(transfer, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid transfer request" },
      { status: 400 }
    );
  }
}

function calculateFee(amount: number): number {
  // Simple fee calculation - would be more complex in production
  return Math.max(amount * 0.01, 5);
}