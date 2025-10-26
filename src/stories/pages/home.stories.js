import HomePage from "@/pages/Home.vue";

export default {
      title: "Example/Pages/Home", // replace "Example" with your project name
      component: HomePage,
      parameters: {
            layout: "fullscreen",
      },
};

export const LoggedOut = {};

export const LoggedIn = {};

// export const LoggedIn = {
//       render: () => ({
//             components: {
//                   MyPage,
//             },
//             template: "<my-page />",
//       }),
//       play: async ({ canvasElement }) => {
//             const canvas = within(canvasElement);
//             const loginButton = canvas.getByRole("button", { name: /Log in/i });
//             await expect(loginButton).toBeInTheDocument();
//             await userEvent.click(loginButton);
//             await expect(loginButton).not.toBeInTheDocument();

//             const logoutButton = canvas.getByRole("button", { name: /Log out/i });
//             await expect(logoutButton).toBeInTheDocument();
//       },
// };
