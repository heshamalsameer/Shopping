import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";
import { CreateCartDto } from "@/utils/dtos";
import { createCartShema, createCommentShema } from "@/utils/validationSchemas";



/**
 *  @method  POST
 *  @route   ~/api/carts
 *  @desc    Create New Cart
 *  @access  private (only logged in user)
 */
export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json(
        { message: "only logged in user, access denied" },
        { status: 401 }
      );
    }

    const body = (await request.json()) as CreateCartDto;

    const validation = createCartShema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const newCart = await prisma.cart.create({
      data: {
        title: body.title,
        description:body.description,
        image:body.image,
        price:parseInt(body.price),
        userId: user.id,
      },
    });
    return NextResponse.json(newCart, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}


/**
 *  @method  GET
 *  @route   ~/api/carts
 *  @desc    Get All Carts
 *  @access  private (only admin)
 */
export async function GET(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (user === null ) {
      return NextResponse.json(
        { message: "only admin, access denied" },
        { status: 403 }
      );
    }

    if (user.isAdmin) {
      const carts = await prisma.cart.findMany();
      return NextResponse.json(carts, { status: 200 });
    }

    const carts = await prisma.cart.findMany({
      where:{userId: user.id}
    });


    return NextResponse.json(carts, { status: 200 });


    
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

