self.addEventListener("push", function (event) {
	if (!(self.Notification && self.Notification.permission === "granted")) {
		return;
	}

	var data = {};

	// Get data from notification
	if (event.data) {
		data = event.data.json();
	}

	var title = data.title;
	var message = data.message;
	var icon = data.icon;
	var link = data.link;

	// Show received notification
	event.waitUntil(
		self.registration.showNotification(title, {
			body: message,
			icon: icon,
			badge: icon,
			data: { url: link }
		})
	);
});

self.addEventListener("notificationclick", function (event) {
	var data = "";
	if (event.notification.data) {
		data = event.notification.data;
	}
	var url = data.url;
	if (url != "") {
		event.waitUntil(
			clients.matchAll({ type: "window" }).then((windowClients) => {
				// Check if there is already a window/tab open with the target URL
				for (var i = 0; i < windowClients.length; i++) {
					var client = windowClients[i];
					// If so, just focus it.
					if (client.url === url && "focus" in client) {
						return client.focus();
					}
				}
				// If not, then open the target URL in a new window/tab.
				if (clients.openWindow) {
					return clients.openWindow(url);
				}
			})
		);
	}
});
