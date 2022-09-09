/**
 * @file The Typescript definitions for the UIlicious `SAMPLE.*` commands.
 */

interface SampleCommand {

	/**
	 * Generates a random string useful for IDs and password.
	 * 
	 * @param length Length of the string to generate.
	 * 
	 * @param token A string acting as a seed to generate the last name. See examples of how it is used.
	 * 
	 * @returns A randomly generated string.
	 * 
	 * @example
	 * // Generates a 12-character long random base58 string as the password to be used as input data for the "Password" field.
	 * var password = SAMPLE.id(12);
	 * I.fill("Password", password);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/sample.html#sampleid} for more information.
	 * 
	 */
	id(length?: number, token?: string): string;

	/**
	 * Generates a random phone number.
	 * 
	 * @param map Takes in a JSON map that can contain token and nationality. Nationality supports only us, uk and fr.
	 * 
	 * @param token A string acting as a seed to generate the last name. See examples of how it is used.
	 * 
	 * @returns A randomly generated phone number.
	 * 
	 * @example
	 * // Generates a random formatted phone number to be used as input data for the "Phone Number" field.
	 * let phone = SAMPLE.phone();
	 * I.fill("Phone Number", phone);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/sample.html#samplephone} for more information.
	 * 
	 */
	phone(map?: PhoneOptions, token?: string): string;

	/**
	 * Generates a random last name.
	 * 
	 * @param map Takes in a JSON map that can contain token and nationality. Nationality supports only us and it.
	 * 
	 * @param token A string acting as a seed to generate the last name. See examples of how it is used.
	 * 
	 * @returns A randomnly generated last name.
	 * 
	 * @example
	 * // Generates a random last name as input data for the "Last Name" field.
	 * var last = SAMPLE.last();
	 * I.fill("Last Name", last);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/sample.html#samplelast} for more information.
	 * 
	 */
	last(map?: SimpleNameOptions, token?: string): string;

	/**
	 * Generates a random first name.
	 * 
	 * @param map Takes in a JSON map that can contain token and nationality. Nationality supports only us and it.
	 * 
	 * @param token A string acting as a seed to generate the last name. See examples of how it is used.
	 * 
	 * @returns A randomly generated first name.
	 * 
	 * @example
	 * // Generates a random first name as input data for the "First Name" field.
	 * var first = SAMPLE.first();
	 * I.fill("First Name", first);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/sample.html#samplefirst} for more information.
	 * 
	 */
	first(map?: SimpleNameOptions, token?: string): string;

	/**
	 * Generates a random full name.
	 * 
	 * @param map Takes in a JSON map that can contain token and nationality. Nationality supports only us and it.
	 * 
	 * @param token A string acting as a seed to generate the last name. See examples of how it is used.
	 * 
	 * @returns A randomly generated full name.
	 * 
	 * @example
	 * // Generates a random full name as input data for the "Full Name" field.
	 * var name = SAMPLE.name();
	 * I.fill("Full Name", name);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/sample.html#samplename} for more information.
	 * 
	 */
	name(map?: NameOptions, token?: string): string;

	/**
	 * Generates a random email address with the inboxkitten.com domain and used as input data for the "Email" field.
	 * 
	 * @param map Takes in a JSON map that can contain token and nationality. Nationality supports only us and it.
	 * 
	 * @param token A string acting as a seed to generate the last name. See examples of how it is used.
	 * 
	 * @returns A randomly generated email address.
	 * 
	 * @example
	 * // Generates a random full name as input data for the "Full Name" field.
	 * let email = SAMPLE.email();
	 * I.fill("Email", email);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/sample.html#sampleemail} for more information.
	 * 
	 */
	email(map?: EmailOptions, token?: string): string;
}

interface PhoneOptions extends BaseOptions {
	/**
	 * A true/false; to format the number such as (494) 927-2152.
	 */
	formatted?: boolean;

	/**
	 * A uk/us/fr; the phone number in the country.
	 */
	country?: string;

	/**
	 * A true/false; only applicable to `uk` and `fr`.
	 */
	mobile?: boolean;
}

interface SimpleNameOptions extends BaseOptions {
	/**
	 * This will generate a selected nationality last name.
	 */
	nationality?: string;
}

interface NameOptions extends BaseOptions {
	/**
	 * A true/false; middle name.
	 */
	middle?: boolean;

	/**
	 * A true/false; shortform of the middle name.
	 */
	middle_initial?: boolean;

	/**
	 * A true/false; salutations of the person.
	 */
	prefix?: boolean;

	/**
	 * A true/false; information after the last name.
	 */
	suffix?: boolean;

	/**
	 * A true/false; gender of the name.
	 */
	gender?: "male" | "female";

	/**
	 * A true/false; nationality of the person.
	 */
	nationality?: string;
}

interface EmailOptions extends BaseOptions {
	/**
	 * Domain of the email address.
	 */
	domain?: string;

	/**
	 * Length of the username.
	 */
	length?: number;
}

interface BaseOptions {
	/**
	 * Random seed string to generate the name.
	 */
	token?: string;
}

export default SampleCommand;
