const spellsData =[
    {
        id: "frieren-flowers",
        title: "Frieren flowers",
        tags:[
            { label: "Artifact", class: "medium" },
            { label: "Utility", class: "type-utility" },
            { label: "Medium Cost", class: "cost-medium" }
        ],
        gif: "./gifs/frieren.gif", 
        shortDesc: "Instantly blooms a massive field of flowers in a wide radius around the caster, recreating a legendary elven spell.",
        deepDesc: "This macro iterates over an X and Z coordinate grid around the caster. For each column, it raycasts downwards to find the ground. Upon hitting valid soil, it evaluates random entropy and modulo math to break specific blocks and place flora, finishing by applying Overgrow. Heavy stack management is handled via Ravenmind.",
        variants:[
            {
                btnLabel: "Copy Spell Code",
                code: `readable

(
    read
)

(
    num_10
)

if,
eval,
floor,
duplicate,
num_30,
greater

(
    mask_v,
    num_30
)

(

)

if,
eval,
duplicate,
duplicate,
num_2,
mul,
num_1,
add,
duplicate,
write/local,
swap,
num_-1,
mul,
swap,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    swap,
    mask_v,
    read/local,
    duplicate,
    num_1,
    add,
    write/local,
    add
)

swap,
for_each,
swap,
write/local,
get_caster,
entity_pos/foot,
floor,
swap,
duplicate

(
    swap

    (
        2dup,
        num_0,
        swap,
        construct_vec,
        abs,
        read/local,
        less_eq

        (
            random,
            num_1,
            num_2,
            div,
            less

            (
                swap,
                num_7,
                swap,
                construct_vec,
                add,
                duplicate,
                num_1,
                duplicate,
                duplicate,
                construct_vec,
                num_2,
                div,
                add,
                duplicate,
                const/vec/ny,
                raycast,
                2dup,
                equals,
                over,
                const/null,
                equals,
                or

                (
                    mask_v,
                    mask_v,
                    mask_v
                )

                (
                    swap,
                    mask_v,
                    swap,
                    mask_v,
                    random,
                    num_1,
                    num_5,
                    div,
                    less

                    (
                        bonemeal
                    )

                    (
                        const/vec/py,
                        add,
                        duplicate,
                        break_block,
                        place_block
                    )

                    if,
                    eval
                )

                if,
                eval
            )

            (
                mask_v,
                mask_v,
                mask_v
            )

            if,
            eval
        )

        (
            mask_v,
            mask_v,
            mask_v
        )

        if,
        eval,
        const/null
    )

    swap,
    for_each,
    mask_v,
    mask_v,
    mask_v,
    const/null
)

swap,
for_each,
mask_v,
mask_v,
mask_v`
            }
        ]
    },
    {
        id: "tunnel-builder",
        title: "Excavation Protocol",
        tags:[
            { label: "Artifact", class: "medium" },
            { label: "Construction", class: "type-construction" },
            { label: "Medium Cost", class: "cost-medium" }
        ],
        gif: "./gifs/tunnel.gif", 
        shortDesc: "Rapidly mines a 3x3 tunnel perfectly aligned with your gaze. Available in variants with or without automatic illumination.",
        deepDesc: "Extracts the caster's eye position and look vector, coercing the look vector to the nearest primary axis (X, Y, or Z). Using Thoth's Gambits, it loops through a grid relative to the axis of movement, executing 'Break Block'. The Illuminated variant uses a Modulo operation to trigger 'Conjure Light' exactly every 9 blocks.",
        variants:[
            {
                btnLabel: "Copy with Lights",
                code: `readable

(
    read,
    abs,
    floor
)

(
    num_28
)

if,
eval,
duplicate,
write/local,
const/null,
swap,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    mask_v,
    read/local,
    num_1,
    add,
    duplicate,
    write/local
)

swap,
for_each,
get_caster,
entity_pos/eye,
get_caster,
get_entity_look,
duplicate,
const/vec/py,
div,
over,
const/vec/pz,
div,
over,
abs,
num_0,
equals,
rotate_reverse,
swap,
if,
duplicate,
abs,
div,
2dup,
div,
duplicate,
abs,
div,
num_5,
last_n_list,
write/local,
get_caster,
get_entity_height,
num_10,
num_6,
div,
less

(
    num_0,
    num_1,
    last_n_list,
    num_0,
    num_1,
    num_2,
    last_n_list
)

(
    num_-1,
    num_0,
    num_1,
    num_3,
    last_n_list,
    duplicate
)

if,
eval

(
    read/local,
    num_4,
    index,
    mul,
    over

    (
        read/local,
        num_3,
        index,
        mul,
        over,
        add,
        read/local,
        num_0,
        index

        (
            read/local,
            num_2,
            index,
            mul,
            over,
            add,
            read/local,
            num_1,
            index,
            add,
            break_block,
            mask_v,
            mask_v,
            mask_v,
            const/null
        )

        swap,
        for_each,
        mask_v,
        mask_v,
        mask_v,
        mask_v,
        const/null
    )

    swap,
    for_each,
    mask_v,
    mask_v,
    mask_v,
    const/null
)

swap,
for_each,
mask_v,
read/local,
num_0,
index

(
    duplicate,
    num_9,
    modulo,
    num_0,
    equals

    (
        read/local,
        num_2,
        index,
        mul,
        read/local,
        num_1,
        index,
        add,
        conjure_light,
        const/null
    )

    (
        mask_v,
        const/null
    )

    if,
    eval
)

swap,
for_each,
mask_v,
mask_v`
            },
            {
                btnLabel: "Copy without Lights",
                code: `readable

(
    read,
    abs,
    floor
)

(
    num_28
)

if,
eval,
duplicate,
write/local,
const/null,
swap,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    mask_v,
    read/local,
    num_1,
    add,
    duplicate,
    write/local
)

swap,
for_each,
get_caster,
entity_pos/eye,
get_caster,
get_entity_look,
duplicate,
const/vec/py,
div,
over,
const/vec/pz,
div,
over,
abs,
num_0,
equals,
rotate_reverse,
swap,
if,
duplicate,
abs,
div,
2dup,
div,
duplicate,
abs,
div,
num_5,
last_n_list,
write/local,
get_caster,
get_entity_height,
num_10,
num_6,
div,
less

(
    num_0,
    num_1,
    last_n_list,
    num_0,
    num_1,
    num_2,
    last_n_list
)

(
    num_-1,
    num_0,
    num_1,
    num_3,
    last_n_list,
    duplicate
)

if,
eval

(
    read/local,
    num_4,
    index,
    mul,
    over

    (
        read/local,
        num_3,
        index,
        mul,
        over,
        add,
        read/local,
        num_0,
        index

        (
            read/local,
            num_2,
            index,
            mul,
            over,
            add,
            read/local,
            num_1,
            index,
            add,
            break_block,
            mask_v,
            mask_v,
            mask_v,
            const/null
        )

        swap,
        for_each,
        mask_v,
        mask_v,
        mask_v,
        mask_v,
        const/null
    )

    swap,
    for_each,
    mask_v,
    mask_v,
    mask_v,
    const/null
)

swap,
for_each,
mask_v,
mask_v`
            }
        ]
    },
    {
        isDouble: true,
        left: {
            title: "Math Heart: Outline",
            tags:[
                { label: "Staff / Focus", class: "medium" },
                { label: "Construction", class: "type-construction" },
                { label: "Optimized", class: "cost-low" }
            ],
            gif: "./gifs/heartFrame.gif", 
            shortDesc: "Draws a beautiful, hollow block-built heart shape in the air. Size scales dynamically.",
            deepDesc: "Evaluates parametric equations involving sine and cosine to calculate coordinates for a perfect heart outline. The scale dynamically adjusts based on the caster's height (checks if crouching) or reads numerical input from an external Focus/Abacus. Highly optimized for low media consumption.",
            variants:[
                { btnLabel: "Copy Outline Code", code: `readable

(
    read,
    floor,
    duplicate,
    num_10,
    duplicate,
    add,
    num_1,
    add,
    greater

    (
        write/local,
        num_10,
        duplicate,
        add,
        num_1,
        add,
        duplicate,
        print
    )

    (
        duplicate,
        num_1,
        less

        (
            write/local,
            num_1
        )

        (

        )

        if,
        eval
    )

    if,
    eval
)

(
    get_caster,
    get_entity_height,
    num_3,
    num_2,
    div,
    greater

    (
        num_8
    )

    (
        num_10,
        num_5,
        add
    )

    if,
    eval
)

if,
eval,
duplicate,
num_10,
mul,
floor,
duplicate,
write/local,
const/null,
swap,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    mask_v,
    mask_v,
    read/local,
    duplicate,
    num_1,
    add,
    write/local
)

swap,
for_each

(
    over,
    num_10,
    mul,
    floor,
    div,
    const/double/tau,
    mul,
    2dup,
    cos,
    mul,
    rotate_reverse,
    duplicate,
    sin,
    swap,
    cos,
    abs,
    num_1,
    num_2,
    div,
    pow,
    add,
    mul,
    floor,
    swap,
    floor,
    swap,
    get_caster,
    get_entity_look,
    const/vec/py,
    div,
    coerce_axial,
    rotate,
    mul,
    swap,
    const/vec/py,
    mul,
    add,
    get_caster,
    get_entity_look,
    coerce_axial,
    num_6,
    mul,
    get_caster,
    entity_pos/eye,
    add,
    add,
    duplicate,
    floor,
    num_1,
    duplicate,
    duplicate,
    construct_vec,
    num_2,
    div,
    add,
    duplicate,
    const/vec/py,
    raycast,
    equals

    (
        mask_v
    )

    (
        place_block
    )

    if,
    eval
)

swap,
for_each,
mask_v,
mask_v` }
            ]
        },
        right: {
            title: "Math Heart: Solid Core",
            tags:[
                { label: "Staff / Focus", class: "medium" },
                { label: "Construction", class: "type-construction" },
                { label: "Heavy Cost", class: "cost-high" }
            ],
            gif: "./gifs/heartfull.gif", 
            shortDesc: "Generates a fully filled, solid block-built heart. Unoptimized and resource-heavy.",
            deepDesc: "Uses the same parametric sine/cosine equations as the outline version, but relies on nested Thoth's Gambits (for_each) to iterate and fill the internal volume of the shape. Will rapidly drain media reserves due to the sheer volume of 'Place Block' operations.",
            variants:[
                { btnLabel: "Copy Filled Code", code: `readable

(
    read,
    floor,
    duplicate,
    num_10,
    duplicate,
    add,
    num_1,
    add,
    greater

    (
        write/local,
        num_10,
        duplicate,
        add,
        num_1,
        add,
        duplicate,
        print
    )

    (
        duplicate,
        num_1,
        less

        (
            write/local,
            num_1
        )

        (

        )

        if,
        eval
    )

    if,
    eval
)

(
    get_caster,
    get_entity_height,
    num_3,
    num_2,
    div,
    greater

    (
        num_6
    )

    (
        num_10,
        num_5,
        add
    )

    if,
    eval
)

if,
eval,
duplicate,
num_2,
div,
swap,
duplicate,
num_-1,
mul,
swap,
num_2,
mul,
num_1,
add,
duplicate,
write/local,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    read/local,
    duplicate,
    num_1,
    add,
    write/local,
    add
)

swap,
for_each,
duplicate

(
    write/local

    (
        read/local,
        construct_vec,
        duplicate,
        deconstruct_vec,
        mask_v,
        duplicate,
        mul,
        num_2,
        fisherman/copy,
        deconstruct_vec,
        swap,
        abs,
        rotate,
        mul,
        num_1,
        num_2,
        div,
        pow,
        sub,
        duplicate,
        mul,
        add,
        over,
        duplicate,
        mul,
        less_eq,
        swap,
        mask_v

        (
            deconstruct_vec,
            rotate,
            mask_v,
            swap,
            get_caster,
            get_entity_look,
            const/vec/py,
            div,
            coerce_axial,
            mul,
            swap,
            const/vec/py,
            mul,
            add,
            get_caster,
            get_entity_look,
            coerce_axial,
            num_6,
            mul,
            get_caster,
            entity_pos/eye,
            add,
            add,
            duplicate,
            floor,
            num_1,
            duplicate,
            duplicate,
            construct_vec,
            num_2,
            div,
            add,
            duplicate,
            const/vec/py,
            raycast,
            equals

            (
                mask_v
            )

            (
                place_block
            )

            if,
            eval
        )

        (
            mask_v
        )

        if,
        eval
    )

    swap,
    for_each
)

swap,
for_each` }
            ]
        }
    },
    {
        id: "spatial-plane",
        title: "Omnidirectional Spatial Plane",
        tags:[
            { label: "Staff / Focus", class: "medium" },
            { label: "Construction", class: "type-construction" },
            { label: "Variable Cost", class: "cost-high" }
        ],
        gif: "./gifs/wall_maker.gif", 
        shortDesc: "Projects a 3D structural plane of blocks in any direction you look. Perfect for instant walls, bridges, or leveling terrain.",
        deepDesc: "Reads numerical input to determine the radius (defaults to 5, but can scale up to 20 if sneaking or reading from an Abacus/Focus). It maps a 2D grid transposed into 3D space using the caster's look vector and position. The macro clears intersecting entities with 'Break Block' and solidifies the structure with 'Place Block'.",
        variants:[
            {
                btnLabel: "Copy Spell Code",
                code: `readable

(
    read,
    floor,
    duplicate,
    num_10,
    duplicate,
    add,
    num_1,
    add,
    greater

    (
        write/local,
        num_10,
        duplicate,
        add,
        num_1,
        add,
        duplicate,
        print
    )

    (
        duplicate,
        num_1,
        less

        (
            write/local,
            num_1
        )

        (

        )

        if,
        eval
    )

    if,
    eval
)

(
    get_caster,
    get_entity_height,
    num_3,
    num_2,
    div,
    greater

    (
        num_5
    )

    (
        num_10,
        num_5,
        add
    )

    if,
    eval
)

if,
eval,
duplicate,
num_-1,
mul,
swap,
num_2,
mul,
num_1,
add,
duplicate,
write/local,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    read/local,
    duplicate,
    num_1,
    add,
    write/local,
    add
)

swap,
for_each,
duplicate

(
    write/local

    (
        read/local,
        get_caster,
        get_entity_look,
        duplicate,
        const/vec/py,
        div,
        over,
        const/vec/pz,
        div,
        over,
        abs,
        num_0,
        equals,
        rotate_reverse,
        swap,
        if,
        duplicate,
        abs,
        div,
        2dup,
        div,
        duplicate,
        abs,
        div,
        num_3,
        fisherman,
        mul,
        swap,
        num_3,
        fisherman,
        mul,
        add,
        swap,
        num_2,
        mul,
        add,
        get_caster,
        entity_pos/eye,
        add,
        duplicate,
        floor,
        num_1,
        duplicate,
        duplicate,
        construct_vec,
        num_2,
        div,
        add,
        duplicate,
        const/vec/py,
        raycast,
        equals

        (
            mask_v
        )

        (
            place_block
        )

        if,
        eval
    )

    swap,
    for_each
)

swap,
for_each`
            }
        ]
    },

    {
        id: "sanctuary-sphere",
        title: "Ethereal Sanctuary Sphere",
        tags:[
            { label: "Artifact", class: "medium" },
            { label: "Construction", class: "type-construction" },
            { label: "Extreme Cost", class: "cost-high" }
        ],
        gif: "./gifs/sphere.gif", 
        shortDesc: "Carves out a massive hollow sphere around the caster, complete with a 3x3 magical platform to stand on and ambient interior lighting.",
        deepDesc: "Calculates a spherical volume around the caster based on the input radius. It clears the interior using 'Break Block' and solidifies the outer shell. A dedicated sub-routine constructs a 3x3 floor of Conjured Blocks exactly at the caster's feet ('entity_pos/foot'). Random entropy conditionally triggers 'Conjure Light' along the inner surface.",
        variants:[
            {
                btnLabel: "Copy Spell Code",
                code: `readable

(
    read,
    abs,
    floor,
    duplicate,
    num_0,
    greater

    (

    )

    (
        mask_v,
        num_5
    )

    if,
    eval
)

(
    num_5
)

if,
eval,
duplicate,
num_-1,
mul,
over,
num_2,
mul,
num_1,
add,
duplicate,
write/local,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    swap,
    mask_v,
    read/local,
    duplicate,
    num_1,
    add,
    write/local,
    add
)

swap,
for_each,
write/local,
read/local

(
    read/local

    (
        read/local

        (
            construct_vec,
            duplicate,
            abs,
            floor,
            swap,
            get_caster,
            entity_pos/eye,
            add,
            rotate_reverse,
            sub,
            duplicate,
            num_0,
            greater_eq

            (
                over,
                break_block,
                duplicate,
                num_0,
                equals

                (
                    mask_v,
                    place_block
                )

                (
                    duplicate,
                    num_1,
                    equals

                    (
                        mask_v,
                        random,
                        num_1,
                        num_10,
                        div,
                        less

                        (
                            conjure_light
                        )

                        (
                            mask_v
                        )

                        if,
                        eval
                    )

                    (
                        mask_v,
                        mask_v
                    )

                    if,
                    eval
                )

                if,
                eval
            )

            (
                mask_v,
                mask_v
            )

            if,
            eval
        )

        swap,
        for_each,
        mask_v
    )

    swap,
    for_each,
    mask_v
)

swap,
for_each,
mask_v,
mask_v,
num_-1,
num_0,
num_1,
num_3,
last_n_list,
duplicate

(
    over

    (
        over,
        num_-1,
        swap,
        construct_vec,
        get_caster,
        entity_pos/foot,
        add,
        conjure_block
    )

    swap,
    for_each,
    mask_v
)

swap,
for_each,
mask_v,
mask_v`
            },
            {
                btnLabel: "Copy without Lights",
                code: `readable

(
    read,
    abs,
    floor,
    duplicate,
    num_0,
    greater

    (

    )

    (
        mask_v,
        num_5
    )

    if,
    eval
)

(
    num_5
)

if,
eval,
duplicate,
num_-1,
mul,
over,
num_2,
mul,
num_1,
add,
duplicate,
write/local,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    swap,
    mask_v,
    read/local,
    duplicate,
    num_1,
    add,
    write/local,
    add
)

swap,
for_each,
swap,
mask_v,
write/local,
read/local

(
    read/local

    (
        read/local

        (
            construct_vec,
            duplicate,
            abs,
            floor,
            read/local,
            abs,
            num_1,
            sub,
            num_2,
            div,
            2dup,
            less_eq

            (
                equals,
                swap,
                get_caster,
                entity_pos/eye,
                add,
                duplicate,
                break_block,
                swap

                (
                    place_block
                )

                (
                    mask_v
                )

                if,
                eval
            )

            (
                mask_v,
                mask_v,
                mask_v
            )

            if,
            eval
        )

        swap,
        for_each,
        mask_v,
        mask_v,
        mask_v
    )

    swap,
    for_each,
    mask_v,
    mask_v
)

swap,
for_each,
mask_v`
            }
        ]
    },


    {
        id: "spiral-staircase",
        title: "Illuminated Spiral Descent",
        tags:[
            { label: "Artifact", class: "medium" },
            { label: "Construction", class: "type-construction" },
            { label: "Medium Cost", class: "cost-medium" }
        ],
        gif: "./gifs/stairs.gif", 
        shortDesc: "Instantly bores a functional, lit spiral staircase to your desired length. Sneak while casting to build upwards instead.",
        deepDesc: "Reads length from the stack. Checks the caster's height ('get_entity_height') to determine vertical direction: builds upward if crouching, downward if standing. It maps an array of cardinal directional offsets, stepping the Y-axis incrementally. A modulo operation ('num_4, modulo') perfectly spaces Conjured Lights along the outer edge of the spiral.",
        variants:[
            {
                btnLabel: "Copy Spell Code",
                code: `readable

(
    read,
    floor,
    duplicate,
    num_10,
    num_3,
    mul,
    greater

    (
        write/local,
        num_10,
        num_3,
        mul,
        duplicate,
        print
    )

    (
        duplicate,
        num_1,
        less

        (
            write/local,
            num_1
        )

        (

        )

        if,
        eval
    )

    if,
    eval,
    get_caster,
    get_entity_height,
    num_3,
    num_2,
    div,
    less

    (
        duplicate,
        num_10,
        num_2,
        mul,
        num_6,
        add,
        greater

        (
            write/local,
            num_10,
            num_2,
            mul,
            num_6,
            add
        )

        (

        )

        if,
        eval
    )

    (

    )

    if,
    eval
)

(
    get_caster,
    get_entity_height,
    num_3,
    num_2,
    div,
    greater

    (
        num_10,
        num_3,
        mul
    )

    (
        num_10,
        num_2,
        mul,
        num_6,
        add
    )

    if,
    eval
)

if,
eval,
get_caster,
get_entity_height,
num_3,
num_2,
div,
greater

(
    num_-1
)

(
    num_1
)

if,
eval,
swap,
duplicate,
write/local,
num_0,
swap,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    read/local,
    num_1,
    add,
    duplicate,
    write/local,
    add,
    over,
    mul
)

swap,
for_each,
swap,
write/local,
empty_list,
const/vec/px,
append,
const/vec/px,
const/vec/pz,
add,
append,
const/vec/pz,
append,
const/vec/nx,
const/vec/pz,
add,
append,
const/vec/nx,
append,
const/vec/nx,
const/vec/nz,
add,
append,
const/vec/nz,
append,
const/vec/px,
const/vec/nz,
add,
append,
swap

(
    duplicate,
    write/local,
    over,
    over,
    abs,
    num_2,
    num_3,
    pow,
    modulo,
    index,
    swap,
    const/vec/py,
    mul,
    add,
    get_caster,
    entity_pos/foot,
    add,
    duplicate,
    break_block,
    const/vec/py,
    add,
    duplicate,
    break_block,
    const/vec/py,
    add,
    duplicate,
    break_block,
    const/vec/py,
    add,
    duplicate,
    break_block,
    read/local,
    abs,
    num_4,
    modulo,
    num_0,
    equals

    (
        conjure_light
    )

    (
        write/local
    )

    if,
    eval
)

swap,
for_each,
write/local,
write/local`
            }
        ]
    },
        {
        id: "surface-terraformer",
        title: "Topological Surface Painter",
        tags:[
            { label: "Artifact", class: "medium" },
            { label: "Construction", class: "type-construction" },
            { label: "Variable Cost", class: "cost-medium" }
        ],
        gif: "./gifs/terraform.gif", 
        shortDesc: "Replaces the top layer of the terrain with a selected block while perfectly preserving the original landscape shape.",
        deepDesc: "Functioning as a highly optimized, stripped-down variant of the Frieren spell, this macro loops over a horizontal coordinate grid. At each step, it raycasts downward to locate the highest solid block. It then executes 'Place Block' to overwrite only the surface layer. Ideal for large-scale landscaping and path-making without altering the natural elevation of the world.",
        variants:[
            {
                btnLabel: "Copy Spell Code",
                code: `readable

(
    read
)

(
    num_8
)

if,
eval,
floor,
duplicate,
num_30,
greater

(
    mask_v,
    num_30
)

(

)

if,
eval,
duplicate,
duplicate,
num_2,
mul,
num_1,
add,
duplicate,
write/local,
swap,
num_-1,
mul,
swap,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    swap,
    mask_v,
    read/local,
    duplicate,
    num_1,
    add,
    write/local,
    add
)

swap,
for_each,
swap,
write/local,
get_caster,
entity_pos/foot,
floor,
swap,
duplicate

(
    swap

    (
        2dup,
        num_0,
        swap,
        construct_vec,
        abs,
        read/local,
        less_eq

        (
            swap,
            num_9,
            swap,
            construct_vec,
            add,
            duplicate,
            num_1,
            duplicate,
            duplicate,
            construct_vec,
            num_2,
            div,
            add,
            duplicate,
            const/vec/ny,
            raycast,
            2dup,
            equals,
            over,
            const/null,
            equals,
            or

            (
                mask_v,
                mask_v,
                mask_v
            )

            (
                swap,
                mask_v,
                swap,
                mask_v,
                const/vec/py,
                add,
                duplicate,
                break_block,
                place_block
            )

            if,
            eval
        )

        (
            mask_v,
            mask_v,
            mask_v
        )

        if,
        eval,
        const/null
    )

    swap,
    for_each,
    mask_v,
    mask_v,
    mask_v,
    const/null
)

swap,
for_each,
mask_v,
mask_v,
mask_v`
            }
        ]
    },

    {
        isDouble: true,
        left: {
            title: "Blueprint: Architect (Maker)",
            tags:[
                { label: "Artifact/Focus", class: "medium" },
                { label: "Utility", class: "type-utility" },
                { label: "Low Cost", class: "cost-low" }
            ],
            gif: "./gifs/blueprint_maker.gif", 
            shortDesc: "Scans and records block positions into a Focus, creating a robust, reusable structural blueprint.",
            deepDesc: "Requires a Focus initialized with 'Null'. When casting on a block, it calculates the block's offset relative to the caster's starting anchor coordinate and look vector. This ensures the blueprint is independent of world coordinates. Features multiple optimizations and safeties: it prevents recording duplicate blocks, checks for out-of-bounds ambit limits, and utilizes 'Make Note' (beep) to provide distinct audio feedback upon success or error.",
            variants:[
                { btnLabel: "Copy Architect Code", code: `writable

(
    get_caster,
    entity_pos/eye,
    get_caster,
    get_entity_look,
    raycast,
    duplicate,
    const/null,
    equals

    (
        mask_v,
        get_caster,
        entity_pos/eye,
        num_4,
        num_5,
        beep
    )

    (
        floor,
        readable

        (
            read
        )

        (
            const/null
        )

        if,
        eval,
        duplicate,
        const/null,
        equals

        (
            mask_v,
            get_caster,
            entity_pos/foot,
            floor,
            2dup,
            sub,
            duplicate,
            abs,
            num_32,
            greater

            (
                mask_v,
                mask_v,
                mask_v,
                get_caster,
                entity_pos/eye,
                num_4,
                num_5,
                beep
            )

            (
                singleton,
                swap,
                get_caster,
                get_entity_look,
                deconstruct_vec,
                swap,
                mask_v,
                num_0,
                swap,
                construct_vec,
                coerce_axial,
                rotate_reverse,
                rotate_reverse,
                num_3,
                last_n_list,
                write,
                mask_v,
                get_caster,
                entity_pos/eye,
                num_0,
                num_10,
                beep
            )

            if,
            eval
        )

        (
            write/local,
            read/local,
            num_0,
            index,
            sub,
            duplicate,
            abs,
            num_32,
            greater

            (
                mask_v,
                get_caster,
                entity_pos/eye,
                num_4,
                num_5,
                beep
            )

            (
                duplicate,
                read/local,
                num_2,
                index,
                swap,
                index_of,
                num_0,
                less

                (
                    read/local,
                    num_2,
                    index,
                    swap,
                    append,
                    read/local,
                    num_0,
                    index,
                    read/local,
                    num_1,
                    index,
                    rotate_reverse,
                    rotate_reverse,
                    num_3,
                    last_n_list,
                    write,
                    get_caster,
                    entity_pos/eye,
                    num_0,
                    num_20,
                    beep
                )

                (
                    mask_v
                )

                if,
                eval
            )

            if,
            eval
        )

        if,
        eval
    )

    if,
    eval
)

(
    get_caster,
    entity_pos/eye,
    num_4,
    num_5,
    beep
)

if,
eval` }
            ]
        },
        right: {
            title: "Blueprint: Foreman (Builder)",
            tags:[
                { label: "Artifact", class: "medium" },
                { label: "Construction", class: "type-construction" },
                { label: "Variable Cost", class: "cost-high" }
            ],
            gif: "./gifs/blueprint_builder.gif", 
            shortDesc: "Constructs a recorded blueprint relative to your facing direction. Sneak to calculate required block count.",
            deepDesc: "Reads the coordinate array saved by the Architect. If the caster is sneaking ('get_entity_height' < 1.6), it intercepts the build process and prints the total number of blocks required for the structure. Otherwise, it uses complex trigonometry (arctan2, sin, cos) to dynamically rotate the blueprint's relative coordinates to match the caster's current look vector, placing blocks via 'Place Block'. Due to Hexcasting limitations, multi-material structures require separate blueprints for each block type.",
            variants:[
                { btnLabel: "Copy Foreman Code", code: `readable

(
    read
)

(
    const/null
)

if,
eval,
duplicate,
const/null,
equals

(
    mask_v,
    get_caster,
    entity_pos/eye,
    num_4,
    num_5,
    beep
)

(
    get_caster,
    get_entity_height,
    num_1.6,
    less

    (
        num_2,
        index,
        abs,
        print
    )

    (
        duplicate,
        num_1,
        index,
        get_caster,
        get_entity_look,
        deconstruct_vec,
        swap,
        mask_v,
        num_0,
        swap,
        construct_vec,
        coerce_axial,
        deconstruct_vec,
        swap,
        mask_v,
        swap,
        arctan2,
        swap,
        deconstruct_vec,
        swap,
        mask_v,
        swap,
        arctan2,
        sub,
        duplicate,
        cos,
        num_1,
        num_2,
        div,
        add,
        floor,
        swap,
        sin,
        num_1,
        num_2,
        div,
        add,
        floor,
        get_caster,
        entity_pos/foot,
        floor,
        rotate_reverse,
        num_3,
        last_n_list,
        write/local,
        num_2,
        index

        (
            deconstruct_vec,
            swap,
            rotate_reverse,
            2dup,
            read/local,
            num_1,
            index,
            mul,
            swap,
            read/local,
            num_2,
            index,
            mul,
            add,
            rotate_reverse,
            read/local,
            num_2,
            index,
            mul,
            swap,
            read/local,
            num_1,
            index,
            mul,
            swap,
            sub,
            rotate_reverse,
            construct_vec,
            read/local,
            num_0,
            index,
            add,
            duplicate,
            num_1,
            duplicate,
            duplicate,
            construct_vec,
            num_2,
            div,
            add,
            duplicate,
            const/vec/py,
            raycast,
            equals

            (
                mask_v
            )

            (
                duplicate,
                break_block,
                place_block
            )

            if,
            eval
        )

        swap,
        for_each,
        mask_v,
        get_caster,
        entity_pos/eye,
        num_0,
        num_15,
        beep
    )

    if,
    eval
)

if,
eval` }
            ]
        }
    },
    {
        id: "elytra-boost",
        title: "Elytra Catalyst",
        tags:[
            { label: "Artifact", class: "medium" },
            { label: "Movement", class: "type-movement" },
            { label: "Low Cost", class: "cost-low" }
        ],
        gif: "./gifs/elytra.gif", 
        shortDesc: "Instantly deploys Elytra wings when grounded, or acts as a Firework rocket for massive mid-air acceleration.",
        deepDesc: "Checks the caster's entity height. If the caster is standing normally (height > 1), it assumes they are grounded and invokes 'Altiora' (flight) to deploy wings. If crouching or already gliding (height < 1), it extracts the look vector, multiplies its magnitude, and applies 'Impulse' for a massive burst of speed.",
        variants:[
            {
                btnLabel: "Copy Spell Code",
                code: `get_caster,
duplicate,
get_entity_height,
num_1,
less

(
    duplicate,
    get_entity_look,
    num_2,
    mul,
    add_motion
)

(
    flight
)

if,
eval`
            }
        ]
    },

    {
        id: "magmatic-imprisonment",
        title: "Magmatic Imprisonment",
        tags:[
            { label: "Artifact", class: "medium" },
            { label: "Combat", class: "type-combat" },
            { label: "High Cost", class: "cost-high" }
        ],
        gif: "./gifs/lavacage.gif", 
        shortDesc: "Automatically detects nearby hostile targets, traps them within a cage of magical barriers, and floods the cell with lava.",
        deepDesc: "Scans a 15-block radius for monsters and players. Filters the resulting array to find entities with a height of 2 blocks or less (preventing incomplete cages on large mobs). For each valid target, it generates coordinates around them, summons Conjured Blocks to form unbreakable walls and a ceiling, then executes 'Create Lava' directly on their head.",
        variants:[
            {
                btnLabel: "Copy Spell Code",
                code: `get_caster,
entity_pos/foot,
num_10,
num_5,
add,
zone_entity/monster,
get_caster,
entity_pos/foot,
num_10,
num_5,
add,
zone_entity/player,
add,
get_caster,
swap

(
    duplicate,
    get_entity_height,
    ceil,
    num_2,
    less_eq,
    over,
    num_3,
    fisherman/copy,
    not_equals,
    and

    (
        empty_list,
        const/vec/px,
        append,
        const/vec/nx,
        append,
        const/vec/pz,
        append,
        const/vec/nz,
        append

        (
            over,
            entity_pos/foot,
            add,
            duplicate,
            break_block,
            duplicate,
            conjure_block,
            const/vec/py,
            add,
            duplicate,
            break_block,
            conjure_block,
            write/local,
            write/local
        )

        swap,
        for_each,
        write/local,
        duplicate,
        entity_pos/foot,
        const/vec/py,
        num_2,
        mul,
        add,
        duplicate,
        break_block,
        conjure_block,
        duplicate,
        entity_pos/foot,
        const/vec/py,
        add,
        create_lava,
        write/local,
        write/local
    )

    (
        write/local,
        write/local
    )

    if,
    eval
)

swap,
for_each`
            }
        ]
    },

    {
        id: "item-magnet",
        title: "Kinetic Item Magnet",
        tags:[
            { label: "Artifact", class: "medium" },
            { label: "Utility", class: "type-utility" },
            { label: "Low Cost", class: "cost-low" }
        ],
        gif: "./gifs/magnet.gif", 
        shortDesc: "Pulls all nearby dropped items directly to the caster like a powerful magnet.",
        deepDesc: "Invokes 'Zone Distillation: Item' to compile an array of all dropped item entities within a 30-block radius. A Thoth's Gambit (for_each) iterates through this list, calculating the vector difference between the item's position and the caster's eye position. It normalizes this vector, applies a slight upward vertical modifier to avoid ground friction, and executes 'Impulse' on each item.",
        variants:[
            {
                btnLabel: "Copy Spell Code",
                code: `get_caster,
entity_pos/eye,
duplicate,
write/local,
num_10,
num_3,
mul,
zone_entity/item

(
    duplicate,
    read/local,
    swap,
    entity_pos/foot,
    sub,
    duplicate,
    abs,
    div,
    num_3,
    div,
    const/vec/py,
    num_10,
    div,
    add,
    add_motion
)

swap,
for_each`
            }
        ]
    },
    {
            title: "Ritual: Boundless Dome",
            tags:[
                { label: "Spell Circle", class: "medium" },
                { label: "Construction", class: "type-construction" },
                { label: "Extreme Cost", class: "cost-high" }
            ],
            gif: "./gifs/sphere_circle.gif", 
            shortDesc: "A powerful ritual that automatically projects a sphere perfectly scaled to the dimensions of your Spell Circle.",
            deepDesc: "Exclusively for Spell Circles. It dynamically reads 'circle/bounds/max' and 'circle/bounds/min' to calculate the geometric center and maximum possible radius within the circle's ambit. It then executes a triple-nested iteration to place blocks in a perfect spherical shell that fits your infrastructure exactly. No manual input required—it adapts to the circle size automatically.",
            variants:[
                {
                    btnLabel: "Copy Ritual Code",
                    code: `circle/bounds/max,
circle/bounds/min,
2dup,
add,
num_2,
div,
rotate,
rotate,
sub,
deconstruct_vec,
mask_v,
mask_v,
abs,
num_2,
div,
floor,
num_1,
sub,
duplicate,
num_-1,
mul,
over,
num_2,
mul,
num_1,
add,
duplicate,
write/local,
duplicate_n,
read/local,
last_n_list,
num_0,
write/local

(
    rotate,
    mask_v,
    swap,
    mask_v,
    read/local,
    duplicate,
    num_1,
    add,
    write/local,
    add
)

swap,
for_each,
write/local,
read/local

(
    read/local

    (
        read/local

        (
            construct_vec,
            duplicate,
            abs,
            num_2,
            fisherman/copy,
            swap,
            sub,
            duplicate,
            num_0,
            greater_eq,
            swap,
            num_1,
            less,
            and

            (
                num_2,
                fisherman/copy,
                add,
                duplicate,
                break_block,
                place_block
            )

            (
                mask_v
            )

            if,
            eval,
            mask_v,
            mask_v
        )

        swap,
        for_each,
        mask_v,
        mask_v,
        mask_v,
        mask_v,
        mask_v
    )

    swap,
    for_each,
    mask_v,
    mask_v,
    mask_v,
    mask_v
)

swap,
for_each,
mask_v,
mask_v,
mask_v`
                }
            ]
    }
];