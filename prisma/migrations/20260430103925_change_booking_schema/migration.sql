/*
  Warnings:

  - You are about to drop the column `startTime` on the `Booking` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Booking_startTime_key";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "startTime",
ADD COLUMN     "appointmentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "appointmentTime" TEXT NOT NULL DEFAULT '10:00';
