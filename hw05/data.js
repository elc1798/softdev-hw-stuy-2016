DELEGATES = {
    "Iowa" : [30, 0],
    "New Hampshire" : [23, 0],
    "South Carolina" : [50, 0],
    "Nevada" : [30, 0],
    "Alabama" : [50, 0],
    "Alaska" : [28, 0],
    "Arkansas" : [40, 0],
    "Colorado" : [37, 1],
    "Georgia" : [76, 0],
    "Massachusetts" : [42, 0],
    "Minnesota" : [38, 0],
    "Oklahoma" : [43, 0],
    "Tennessee" : [58, 0],
    "Texas" : [155, 0],
    "Vermont" : [16, 0],
    "Virginia" : [49, 0],
    "Wyoming" : [29, 0],
    "Kansas" : [40, 0],
    "Kentucky" : [46, 0],
    "Louisiana" : [46, 0],
    "Maine" : [23, 0],
    "Hawaii" : [19, 0],
    "Idaho" : [32, 0],
    "Michigan" : [59, 0],
    "Mississippi" : [40, 0],
    "Virgin Islands" : [9, 1],
    "Washington DC" : [19, 0],
    "Florida" : [99, 0],
    "Illinois" : [69, 0],
    "Missouri" : [52, 0],
    "Northern Marianas" : [9, 0],
    "North Carolina" : [72, 0],
    "Ohio" : [66, 0],
    "North Dakota" : [28, 1],
    "Puerto Rico" : [23, 1],
    "Utah" : [40, 1],
    "Wisconsin" : [42, 1],
    "New York" : [95, 1],
    "Connecticut" : [28, 1],
    "Delaware" : [16, 1],
    "Maryland" : [38, 1],
    "Pennsylvania" : [71, 1],
    "Rhode Island" : [19, 1],
    "Indiana" : [57, 1],
    "Nebraska" : [36, 1],
    "West Virginia" : [34, 1],
    "Oregon" : [28, 1],
    "Washington" : [44, 1],
    "California" : [172, 1],
    "Montana" : [27, 1],
    "New Jersey" : [51, 1],
    "New Mexico" : [24, 1],
    "South Dakota" : [29, 1]
};

// I have no idea whether or not d3.selector(data) can take data in the form of
// a dictionary, so I'll just build a list of state / territory names...

PRIMARY_NAMES = [];
for (name in DELEGATES) {
    PRIMARY_NAMES.push(name);
}
PRIMARY_NAMES.sort();

