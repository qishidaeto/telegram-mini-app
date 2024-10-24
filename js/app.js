const WebApp = window.Telegram?.WebApp;

function TelegramMiniApp() {
    const [user, setUser] = React.useState(null);
    const [theme, setTheme] = React.useState("light");

    React.useEffect(() => {
        if (WebApp) {
            WebApp.ready();
            const initData = WebApp.initDataUnsafe;
            if (initData?.user) {
                setUser(initData.user);
            }
            setTheme(WebApp.colorScheme || "light");
        }
    }, []);

    return React.createElement("div", { 
        className: "p-4 max-w-md mx-auto" 
    }, 
        React.createElement("div", { 
            className: `rounded-lg shadow-lg p-6 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}` 
        }, 
            React.createElement("h1", { 
                className: "text-2xl font-bold mb-4" 
            }, 
                "Welcome to Mini App"
            ),
            user && React.createElement("p", { 
                className: "mb-4" 
            }, 
                `Hello, ${user.first_name}!`
            )
        )
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(TelegramMiniApp));
