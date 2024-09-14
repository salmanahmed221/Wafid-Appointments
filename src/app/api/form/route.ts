import { NextRequest, NextResponse } from "next/server";
import { db, formTable } from "@/lib/drizzle";

export async function GET(request: NextRequest) {
  try {
    const res = await db.select().from(formTable);
    return NextResponse.json({ data: res });
  } catch (eror) {
    console.log((eror as { message: string }).message);
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  try {
    if (req.country) {
      const res = await db
        .insert(formTable)
        .values({
          country: req.country,
          city: req.city,
          countrytravelto: req.countrytravelto,
          firstname: req.firstname,
          lastname: req.lastname,
          dateofbirth: req.dateofbirth,
          gender: req.gender,
          martialstatus: req.martialstatus,
          passportno: req.passportno,
          confirmpassportno: req.confirmpassportno,
          passportissuedate: req.passportissuedate,
          passportissueplace: req.passportissueplace,
          passportexpirydate: req.passportexpirydate,
          visatype: req.visatype,
          email: req.email,
          phoneno: req.phoneno,
          nationalid: req.nationalid,
          postionappliedfor: req.postionappliedfor,
          other: req.other,
        })
        .returning();
      console.log(res);

      return new Response(JSON.stringify({ success: true, data: res }), {
        status: 200,
      });
    } else {
      throw new Error("Some field is missing");
    }
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
