const express = require('express');
const fetch = require("node-fetch");
const helper = require("../helperFunctions");

module.exports = {
    getData: async (req, res) => {
        const url = 'https://api.github.com/orgs/';
        const wordQuery = 'takenet';
        const queryParams = '/repos?language=c%23';
        const endpoint = `${url}${wordQuery}${queryParams}`;
        try {
            const response = await fetch(
                endpoint, { cache: 'no-cache', headers: { 'User-Agent': 'Blip test', accept: 'application/vnd.github.v3+json' } });
            if (response.ok) {
                const jsonResponse = await response.json();
                return res.status(200).json(helper.formatResponse(jsonResponse));
            }
        } catch (error) {
            return res.send(error);
        }
    }
}
