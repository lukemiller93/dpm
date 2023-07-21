"use client"
import { client } from "@/sanity/sanity.client";
import { imagePropsZ } from "@/types/shared";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image"
import { z } from "zod";

export const SanityImage = ({image, alt, className, title="", width, height, loading}: {
	image: z.infer<typeof imagePropsZ>;
	alt?: string;
	className?: string;
	title?: string;
	width?: number;
	height?: number;
	loading?: "lazy" | "eager";
}) => {
	const imageProps = useNextSanityImage(client, (image || {}));
	return (
    <Image
			title={title }
      {...imageProps}
      className={className}
			loading={loading || "lazy"}
      alt={alt || ""}
      sizes="(max-width: 800px) 100vw, 800px"
			width={width || 800}
    />
  );
}
