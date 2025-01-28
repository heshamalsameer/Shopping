import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';
import { verifyToken } from '@/utils/verifyToken';


/**
 *  @method  GET
 *  @route   ~/api/carts/count
 *  @desc    Get Carts Count
 *  @access  public
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
      const cartsCount = await prisma.cart.count();
      return NextResponse.json(cartsCount, { status: 200 });
    }

    const cartsCount = await prisma.cart.count({
      where:{userId: user.id}
    });

    return NextResponse.json({ cartsCount }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { message: 'internal server error' },
            { status: 500 }
        );
    }
}