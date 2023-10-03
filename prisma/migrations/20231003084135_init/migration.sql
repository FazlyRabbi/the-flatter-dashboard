-- CreateTable
CREATE TABLE "Featured" (
    "id" SERIAL NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subBranch" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "price" DOUBLE PRECISION,
    "reponame" TEXT NOT NULL DEFAULT 'main',
    "liveLink" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Featured_pkey" PRIMARY KEY ("id")
);
