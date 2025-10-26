import Header from "@/components/Header.vue";

export default {
      title: "Example/Components/Headers",
      component: Header,
      // render: (args) => ({
      //       components: {
      //             Header,
      //       },
      //       setup() {
      //             return {
      //                   ...args,
      //             };
      //       },
      //       template: '<header :user="user">',
      // }),
      parameters: {
            layout: "fulscreen",
      },
};

export const LoggedOut = {
      // args: {
      //       user: {
      //             username: "@bael",
      //             fullname: "Jamshid Shomurodov",
      //             avatar: "",
      //       },
      // },
};
export const LoggedIn = {};
