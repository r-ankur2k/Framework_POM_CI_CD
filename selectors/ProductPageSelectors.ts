export class ProductPageSelectors{
    // Reusables
    static addToCartBtn = "//span[normalize-space(text())='Add to Cart']"
    static productsSectionBtn = "//span[normalize-space(text())='Products']"

    //Product-Specific
    static Fjallraven = "(//footer[@class='card-footer']//button)[1]"
    static JohnHardy= "//button[normalize-space(text())='₹ 695']"
    static monitorSamsung = "//button[normalize-space(text())='₹ 999.99']"
}