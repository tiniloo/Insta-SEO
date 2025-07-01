function analyzeInstagram() {
    let bio = document.getElementById("instaBio").value;
    let result = "✅ Tips:\n";

    if (bio.length < 70) {
        result += "- Bio is a bit short. Add more keywords.\n";
    } else {
        result += "- Bio length is good.\n";
    }

    if (bio.includes("#")) {
        result += "- Good use of hashtags.\n";
    } else {
        result += "- Consider adding 1-2 strategic hashtags.\n";
    }

    document.getElementById("instaResult").innerText = result;
}

function analyzeWebsite() {
    let title = document.getElementById("webPageTitle").value;
    let desc = document.getElementById("webMetaDesc").value;
    let result = "✅ Website SEO Check:\n";

    if (title.length > 60) {
        result += "- Title is too long. Keep under 60 characters.\n";
    } else {
        result += "- Title length is good.\n";
    }

    if (desc.length < 100 || desc.length > 160) {
        result += "- Meta description should be between 100-160 characters.\n";
    } else {
        result += "- Meta description length is perfect.\n";
    }

    document.getElementById("webResult").innerText = result;
}
