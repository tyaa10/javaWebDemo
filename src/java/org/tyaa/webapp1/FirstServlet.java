/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tyaa.webapp1;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.tyaa.webapp1.model.Result;

/**
 *
 * @author student
 */
@WebServlet(name = "FirstServlet", urlPatterns = {"/FirstServlet"})
public class FirstServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("text/html;charset=UTF-8");
        
        /*String idString = "no id";
        
        if (request.getParameterMap().containsKey("id")) {
            idString = request.getParameter("id");
        }
        
        try (PrintWriter out = response.getWriter()) {
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet FirstServlet</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet FirstServlet at " + request.getContextPath() + "</h1>");
            out.println("<div>" + idString + "</div>");
            out.println("</body>");
            out.println("</html>");
        }*/
        
        Gson gson = new Gson();
        
        String loginString = "no login";
        String passwordString = "no password";
        
        if (request.getParameterMap().containsKey("login")
                && request.getParameterMap().containsKey("password")) {
            
            loginString = request.getParameter("login");
            passwordString = request.getParameter("password");
        }
        
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            /*1*/
            /*out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet FirstServlet</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet FirstServlet at " + request.getContextPath() + "</h1>");
            out.println("<div> <span>Your login: </span>" + loginString + "</div>");
            out.println("<div> <span>Your password: </span>" + passwordString + "</div>");
            out.println("</body>");
            out.println("</html>");*/
            
            /*2*/
            //Создали пустой список
            ArrayList<String> data = new ArrayList<>();
            //Добавили в него имя и пароль
            data.add(loginString);
            data.add(passwordString);
            //Предали список в объект Result
            Result result = new Result(data);
            //Превратили объект Result в json-строку
            //и отправили на клиент
            out.println(gson.toJson(result));
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
