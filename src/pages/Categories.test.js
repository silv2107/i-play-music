import mockedAxios from "axios";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import TokenContext from "../TokenContext";
import Categories from "./Categories";

afterEach(cleanup);
jest.mock("axios");

describe("Categories Page", function () {
	var response = {
		data: {
			categories: {
				items: [
					{
						id: "toplists",
						name: "Top Lists",
					},
					{
						id: "pop",
						name: "Pop",
					},
				],
			},
		},
	};

	var mockContext = [
		{
			access_token: "1234",
		},
	];

	it("shows a list of featured playlists", async function () {
		mockedAxios.get.mockResolvedValue(response);

		act(function () {
			render(
				<TokenContext.Provider value={mockContext}>
					<Categories />
				</TokenContext.Provider>
			);
		});

		await waitFor(function () {
			var text = screen.getByText(/pop/i);
			expect(text).toBeInTheDocument();
		});
	});
});
