import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";

interface Props {
    params: { id: string };
  }
  
  /**
   *  @method  DELETE
   *  @route   ~/api/carts/:id
   *  @desc    Delete Product cart
   *  @access  private (only admin OR owner of the cart item)
   */
  export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        const CartItem = await prisma.cart.findUnique({ where: { id: parseInt(params.id) } });
        if (!CartItem) {
            return NextResponse.json({ message: 'Product not found' }, { status: 404 });
        }
  
        const user = verifyToken(request);
        if (user === null) {
            return NextResponse.json(
                { message: 'no token provided, access denied' },
                { status: 401 }
            )
        }
  
        if (user.isAdmin || user.id === CartItem.userId) {
            await prisma.cart.delete({ where: { id: parseInt(params.id) } });
            return NextResponse.json(
                { message: 'Cart item deleted' },
                { status: 200 }
            )
        }
  
        return NextResponse.json(
            { message: 'you are not allowed, access denied' },
            { status: 403 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'internal server error' },
            { status: 500 }
        )
    }
  }