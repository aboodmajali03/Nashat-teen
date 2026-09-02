import { NextResponse } from "next/server";
import { db } from "@/db";
import { products, categories } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get("category");
    const limit = searchParams.get("limit");

    let result;

    if (categorySlug) {
      const category = await db
        .select()
        .from(categories)
        .where(eq(categories.slug, categorySlug))
        .limit(1);

      if (category.length > 0) {
        result = await db
          .select()
          .from(products)
          .where(eq(products.categoryId, category[0].id));
      } else {
        result = await db.select().from(products);
      }
    } else {
      result = await db.select().from(products);
    }

    if (limit) {
      result = result.slice(0, parseInt(limit));
    }

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
