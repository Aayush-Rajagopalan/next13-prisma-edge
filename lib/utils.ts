import prismadb from "./prisma";

export async function checkuser() {
    const userId = "abc"

    if (!userId) {
        return false;
    }

    const user = await prismadb.user.findUnique({
        where: {
            id:userId
        }
    });

    if (user ) {
        return true;
    } else {
        return false;
    }
}