import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/db";

/**
 *  @method  DELETE
 *  @route   ~/api/users/profile/:id
 *  @desc    Delete Profile
 *  @access  private (only user himself can delete his account)
 */

export async function DELETE(request: NextRequest) {
  try {
    const articles = await prisma.user.deleteMany();
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
