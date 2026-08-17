import Image from "next/image";

// The community lockups vary a lot in aspect ratio (from 1.6:1 to 4.8:1), so
// every one is drawn into a fixed box and contained rather than sized directly.
// RUNX1's brand lockup is white-on-black, so it is set on a dark chip instead
// of sitting as a black slab on a white card.
export default function CommunityLogo({
  community,
  className = "h-12 w-40",
  align = "center",
  sizes = "180px",
  priority = false,
}) {
  const onDark = Boolean(community.logoOnDark);

  return (
    <span
      className={`relative block ${className} ${
        onDark ? "overflow-hidden rounded-lg bg-[#111111] px-3" : ""
      }`}
    >
      <Image
        src={community.logo}
        alt={`${community.name} logo`}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-contain ${
          align === "left" ? "object-left" : "object-center"
        }`}
      />
    </span>
  );
}
