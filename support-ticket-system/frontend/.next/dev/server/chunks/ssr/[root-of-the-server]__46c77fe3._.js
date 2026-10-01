module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api';
async function request(path, init) {
    const r = await fetch(`${API}${path}`, {
        ...init,
        headers: {
            'Content-Type': 'application/json',
            ...init?.headers ?? {}
        },
        cache: 'no-store'
    });
    if (!r.ok) {
        const b = await r.json().catch(()=>({
                message: 'Request failed'
            }));
        throw new Error(b.message ?? 'Request failed');
    }
    return r.json();
}
const api = {
    dashboard: ()=>request('/dashboard'),
    agents: ()=>request('/agents'),
    tickets: (q)=>request(`/tickets?${q}`),
    ticket: (id)=>request(`/tickets/${id}`),
    create: (body)=>request('/tickets', {
            method: 'POST',
            body: JSON.stringify(body)
        }),
    update: (id, body)=>request(`/tickets/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body)
        }),
    assign: (id, agentId)=>request(`/tickets/${id}/assign`, {
            method: 'PATCH',
            body: JSON.stringify({
                agentId
            })
        }),
    status: (id, status)=>request(`/tickets/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({
                status
            })
        }),
    delete: (id)=>request(`/tickets/${id}`, {
            method: 'DELETE'
        })
};
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/lib/api.ts [app-rsc] (ecmascript)");
;
;
async function Page() {
    const agents = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].agents();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-black",
                children: "Agents"
            }, void 0, false, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                lineNumber: 1,
                columnNumber: 111
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 text-slate-500",
                children: "Support team members available for ticket assignment."
            }, void 0, false, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                lineNumber: 1,
                columnNumber: 158
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: agents.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold",
                                        children: a.name
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                                        lineNumber: 1,
                                        columnNumber: 398
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge",
                                        children: a.status
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                                        lineNumber: 1,
                                        columnNumber: 445
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                                lineNumber: 1,
                                columnNumber: 360
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-slate-600",
                                children: a.email
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                                lineNumber: 1,
                                columnNumber: 492
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm font-semibold",
                                children: a.department
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                                lineNumber: 1,
                                columnNumber: 548
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-xs text-slate-400",
                                children: [
                                    "Joined ",
                                    new Date(a.created_at).toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                                lineNumber: 1,
                                columnNumber: 608
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                        lineNumber: 1,
                        columnNumber: 323
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx",
                lineNumber: 1,
                columnNumber: 250
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/agents/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__46c77fe3._.js.map