for (const [key, value] of Object.entries(features)) {
    if( Modernizr[key] !== undefined ) {
        var featureContainer = document.createElement('div');
            featureContainer.classList.add('feature');
            if( Modernizr[key] ) {
                featureContainer.classList.add('supported');
            }else if(Modernizr[key] == false){
                featureContainer.classList.add('not-supported');
            }

        var node = document.createElement("div");
            node.classList.add('container');
            node.innerText = value;

            featureContainer.appendChild(node);

            document.getElementById("feature-list")
                    .appendChild(featureContainer);
    }
}