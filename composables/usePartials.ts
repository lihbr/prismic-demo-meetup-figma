export const usePartials = () => {
	const prismic = usePrismic();

	const { data } = useAsyncData("partials", () =>
		prismic.client.getSingle("partials"),
	);

	return data;
};
