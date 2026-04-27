/*
  Warnings:

  - You are about to drop the column `active` on the `AppointmentType` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `AvailabilityRule` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `Booking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[startTime]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Booking_startTime_endTime_key";

-- AlterTable
ALTER TABLE "AppointmentType" DROP COLUMN "active";

-- AlterTable
ALTER TABLE "AvailabilityRule" DROP COLUMN "endTime";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "endTime";

-- CreateIndex
CREATE UNIQUE INDEX "Booking_startTime_key" ON "Booking"("startTime");
