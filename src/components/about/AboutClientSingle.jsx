const AboutClientSingle = ({ title, image, url }) => {
	return (
		<>
			<a href={url} target="_blank">
				<img
					src={image}
					className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
					alt={title}
				/>
			</a>
		</>
	);
};

export default AboutClientSingle;
