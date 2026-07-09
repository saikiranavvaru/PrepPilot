function getHome(req, res) {
    res.send("🏠 Welcome to PrepPilot Backend");
}

function getHealth(req, res) {
    res.json({
        status: "Server is running",
        uptime: "Healthy"
    });
}

module.exports = {
    getHome,
    getHealth
};