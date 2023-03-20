const getAcceleration = (obj) => {
    const a = obj.f / obj.m;
    if(!Number.isNaN(a)){
        return a;
    } else {
        const a = obj.Δv / Δt;
        if(!Number.isNaN(a)){
            return a;
        } else {
            const a = 2*obj.d / obj.t^2;
            if(!Number.isNaN(a)) {
                return a;
            } else {
                return "impossible";
            }
        }
    }
}