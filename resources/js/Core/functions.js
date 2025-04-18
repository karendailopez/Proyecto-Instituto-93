export function getUrlPaginate(url, props, limit, columnOrder = null) {
    if(!url) return '';

    const { search } = props;

    let result = url;
    let init = false;

    if(!result.includes('?') ) {
        result += '?';
    } else {
        init = true;
    }

    if(search) {
        if(init) {
            result += '&';
        } else {
            init = true;
        }

        result += `search=${search}`;
    }

    if(limit) {
        if(init) {
            result += '&';
        } else {
            init = true;
        }

        result += `limit=${limit}`;
    }

    if(columnOrder) {
        if(init) {
            result += '&';
        }

        result += `order=${columnOrder}`;

        if(props.order === columnOrder) {
            result += `&direction=${ props.direction === 'desc' ? 'asc' : 'desc' }`;
        } else {
            result += `&direction=asc`;
        }
    } else {
        if(props.order) {
            if(init) {
                result += '&';
                init = true;
            }

            result += `order=${ props.order }`;
        }

        if(props.direction) {
            if(init) {
                result += '&';
            }

            result += `direction=${ props.direction }`;
        }
    }

    return result;
}

export function hasParentClass(classes, parent) {
    if(typeof classes === 'string') {
        if(parent.classList.contains( classes )) {
            return true;
        }
    } else {
        for( let i = 0; i < classes.length; i++ ) {
            if(parent.classList.contains( classes[i] )) {
                return true;
            }
        }
    }

    if(parent.parentElement) {
        return hasParentClass( classes, parent.parentElement )
    }

    return false;
}
