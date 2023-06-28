export const useBackground = () =>
	useState<Record<string, { color: string; visibility: number }>>(
		"background",
		() => ({}),
	);

const resolvedBackground = computed(() => {
	const background = useBackground();

	const resolved = Object.values(background.value)
		.sort((a, b) => {
			return a.color < b.color ? -1 : 1;
		})
		.filter(
			(slice, _, arr) =>
				slice.visibility > 5 ||
				slice.visibility === Math.max(...arr.map((slice) => slice.visibility)),
		)
		.map((slice, _, arr) => {
			const opacity =
				arr.length === 1
					? 255
					: Math.floor(Math.min(slice.visibility, 100) * 2.55);
			const hexOpacity = `0${opacity.toString(16)}`.slice(-2);
			const color = `${slice.color}${hexOpacity}`;

			return `linear-gradient(to top, ${color}, ${color})`;
		})
		.filter(Boolean)
		.join(", ");

	return resolved;
});

export const useResolvedBackground = (
	defaultColor: string | null = "#ffffff",
) => {
	return computed(() => {
		return resolvedBackground.value || defaultColor;
	});
};
