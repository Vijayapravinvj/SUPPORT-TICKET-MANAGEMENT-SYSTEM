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
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/lib/api.ts [app-rsc] (ecmascript)");
;
;
;
async function Dashboard() {
    const d = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].dashboard();
    const stats = [
        [
            'Total Tickets',
            d.total
        ],
        [
            'Open',
            d.open
        ],
        [
            'In Progress',
            d.inProgress
        ],
        [
            'Resolved',
            d.resolved
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-black",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                lineNumber: 2,
                                columnNumber: 252
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500",
                                children: "Support overview and recent activity."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                lineNumber: 2,
                                columnNumber: 302
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                        lineNumber: 2,
                        columnNumber: 247
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "btn btn-primary",
                        href: "/tickets/new",
                        children: "+ New Ticket"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                        lineNumber: 2,
                        columnNumber: 379
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                lineNumber: 2,
                columnNumber: 191
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                children: stats.map(([n, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: n
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                lineNumber: 2,
                                columnNumber: 574
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-3xl font-black",
                                children: v
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                lineNumber: 2,
                                columnNumber: 619
                            }, this)
                        ]
                    }, n, true, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                        lineNumber: 2,
                        columnNumber: 540
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                lineNumber: 2,
                columnNumber: 458
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card mt-6 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold",
                            children: "Recently Created"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                            lineNumber: 2,
                            columnNumber: 761
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                        lineNumber: 2,
                        columnNumber: 731
                    }, this),
                    d.recent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "p-6 text-slate-500",
                        children: "No tickets yet."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                        lineNumber: 2,
                        columnNumber: 843
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full min-w-[700px] text-left text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            'ID',
                                            'Customer',
                                            'Subject',
                                            'Priority',
                                            'Status',
                                            'Created'
                                        ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-3",
                                                children: x
                                            }, x, false, {
                                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                                lineNumber: 2,
                                                columnNumber: 1089
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1019
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                    lineNumber: 2,
                                    columnNumber: 988
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: d.recent.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-t",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "font-bold underline",
                                                        href: `/tickets/${t.id}`,
                                                        children: [
                                                            "#",
                                                            t.id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 1220
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                                    lineNumber: 2,
                                                    columnNumber: 1200
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3",
                                                    children: t.customer_name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                                    lineNumber: 2,
                                                    columnNumber: 1303
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3",
                                                    children: t.subject
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                                    lineNumber: 2,
                                                    columnNumber: 1345
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "badge",
                                                        children: t.priority
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 1401
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                                    lineNumber: 2,
                                                    columnNumber: 1381
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3",
                                                    children: t.status
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                                    lineNumber: 2,
                                                    columnNumber: 1449
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3",
                                                    children: new Date(t.created_at).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                                    lineNumber: 2,
                                                    columnNumber: 1484
                                                }, this)
                                            ]
                                        }, t.id, true, {
                                            fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1164
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1140
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                            lineNumber: 2,
                            columnNumber: 930
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                        lineNumber: 2,
                        columnNumber: 897
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx",
                lineNumber: 2,
                columnNumber: 684
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9adcc7a7._.js.map