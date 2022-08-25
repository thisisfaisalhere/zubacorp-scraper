-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,
    "cin" VARCHAR(255) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
