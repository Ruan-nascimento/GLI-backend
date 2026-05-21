-- AlterTable
ALTER TABLE "user" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "emailVerified" DROP DEFAULT,
ALTER COLUMN "createdAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "favorite_place" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "placeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "rating" DOUBLE PRECISION,
    "hours" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "favorite_place_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "favorite_place_userId_idx" ON "favorite_place"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "favorite_place_userId_placeId_key" ON "favorite_place"("userId", "placeId");

-- AddForeignKey
ALTER TABLE "favorite_place" ADD CONSTRAINT "favorite_place_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
