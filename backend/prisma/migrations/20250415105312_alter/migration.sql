/*
  Warnings:

  - You are about to drop the `verification_token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "verification_token";

-- CreateTable
CREATE TABLE "verifications_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verifications_tokens_pkey" PRIMARY KEY ("identifier","token")
);
