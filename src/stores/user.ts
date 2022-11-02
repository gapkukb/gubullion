interface User {
	userName: string;
	id: string;
	userId: string;
	token: string;
	avatar: string;
}

export const useUserStore = defineStore("user", () => {
	let info = reactive({} as User);
	const isLoggedIn = computed(() => !!info.token);

	async function login() {
		info = await user.login();
		localStorage.setItem("user", JSON.stringify(info));
		return info;
	}

	function logout() {
		localStorage.removeItem("user");
		info = reactive({} as User);
	}

	return { info, isLoggedIn, login, logout };
});
