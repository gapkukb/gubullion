interface User {
	userName: string;
	id: string;
	userId: string;
	token: string;
	avatar: string;
}

export const useUserStore = defineStore("user", () => {
	const user = reactive({} as User);
	const isLoggedIn = computed(() => !!user.token);

	function login() {}

	function logout() {}

	return { count: user, isLoggedIn, increment: login };
});
