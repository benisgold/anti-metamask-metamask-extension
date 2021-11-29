// stolen from https://github.com/panicsteve/cloud-to-butt

walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType ) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

  const replacement = "The Wallet That Must Not Be Named";

	v = v.replace(/\bMetaMask\b/g, replacement);
	v = v.replace(/\bmetamask\b/g, replacement);
	v = v.replace(/\bMETAMASK\b/g, replacement);
	v = v.replace(/\bMetamask\b/g, replacement);
	
	textNode.nodeValue = v;
}

